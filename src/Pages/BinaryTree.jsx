import { useEffect, useRef, useState, useCallback } from "react";

export default function DynamicScrollInterface() {
  const [currentItem, setCurrentItem] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [scrollDirection, setScrollDirection] = useState('vertical');
  const [targetItem, setTargetItem] = useState(null);
  const containerRef = useRef(null);
  const horizontalRef = useRef(null);
  const isScrolling = useRef(false);

  
  const getScrollMode = useCallback((item) => {
    if (item >= 1 && item <= 20) return 'vertical';
    if (item >= 21 && item <= 30) return 'horizontal';
    if (item >= 31 && item <= 50) return 'vertical';
    return 'vertical';
  }, []);

  
  const progressToNextItem = useCallback(() => {
    if (isScrolling.current || isLoading || currentItem >= 50) return;
    
    const nextItem = currentItem + 1;
    setTargetItem(nextItem);
    isScrolling.current = true;
    setIsLoading(true);
    
    setTimeout(() => {
      setCurrentItem(prev => {
        const next = prev + 1;
        const newMode = getScrollMode(next);
        setScrollDirection(newMode);
        return next;
      });
      setIsLoading(false);
      isScrolling.current = false;
    }, 500);
  }, [currentItem, isLoading, getScrollMode]);

  
  const progressToPrevItem = useCallback(() => {
    if (isScrolling.current || isLoading || currentItem <= 1) return;
    
    isScrolling.current = true;
    setIsLoading(true);
    setTargetItem(currentItem - 1);
    
    setTimeout(() => {
      setCurrentItem(prev => {
        const next = prev - 1;
        const newMode = getScrollMode(next);
        setScrollDirection(newMode);
        return next;
      });
      setIsLoading(false);
      isScrolling.current = false;
    }, 500);
  }, [currentItem, isLoading, getScrollMode]);

  
  useEffect(() => {
    if (scrollDirection !== 'vertical') return;

    const handleVerticalScroll = (e) => {
      if (isScrolling.current || isLoading) return;

      const { deltaY } = e;
      
      if (deltaY > 0 && currentItem < 50) {
        
        progressToNextItem();
      } else if (deltaY < 0 && currentItem > 1) {
        
        progressToPrevItem();
      }
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('wheel', handleVerticalScroll, { passive: true });
      return () => container.removeEventListener('wheel', handleVerticalScroll);
    }
  }, [scrollDirection, progressToNextItem, progressToPrevItem, isLoading, currentItem]);

  
  useEffect(() => {
    if (scrollDirection !== 'horizontal') return;

    const handleHorizontalScroll = (e) => {
      if (isScrolling.current || isLoading) return;

      const { deltaX } = e;
      
      
      if (deltaX > 0 && currentItem < 50) {
        
        progressToNextItem();
      } else if (deltaX < 0 && currentItem > 1) {
        
        progressToPrevItem();
      }
    };

    const handleKeyPress = (e) => {
      if (isScrolling.current || isLoading) return;
      
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
        e.preventDefault();
        progressToNextItem();
      } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        e.preventDefault();
        progressToPrevItem();
      }
    };

    const container = horizontalRef.current;
    if (container) {
      container.addEventListener('wheel', handleHorizontalScroll, { passive: true });
      document.addEventListener('keydown', handleKeyPress);
      return () => {
        container.removeEventListener('wheel', handleHorizontalScroll);
        document.removeEventListener('keydown', handleKeyPress);
      };
    }
  }, [scrollDirection, progressToNextItem, progressToPrevItem, isLoading, currentItem]);

  
  useEffect(() => {
    setScrollDirection(getScrollMode(currentItem));
  }, [currentItem, getScrollMode]);

  
  const Spinner = () => (
    <div style={{
      width: '40px',
      height: '40px',
      border: '4px solid #f3f3f3',
      borderTop: '4px solid #333',
      borderRadius: '50%',
      animation: 'spin 1s linear infinite'
    }}></div>
  );

  
  if (isLoading) {
    return (
      <div style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f5f5f5',
        fontFamily: 'Arial, sans-serif'
      }}>
        <Spinner />
        <div style={{ marginTop: '20px', fontSize: '16px', color: '#666' }}>
          Loading item {targetItem || currentItem + 1}...
        </div>
      </div>
    );
  }

  
  if (scrollDirection === 'vertical') {
    return (
      <>
        <style>{`
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}</style>
        <div 
          ref={containerRef}
          style={{
            height: '100vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#ffffff',
            fontFamily: 'Arial, sans-serif',
            cursor: 'pointer'
          }}
        >
          <div style={{
            fontSize: '80px',
            fontWeight: 'bold',
            color: '#333',
            marginBottom: '20px'
          }}>
            {currentItem}
          </div>
          
          <div style={{
            fontSize: '18px',
            color: '#666',
            marginBottom: '10px'
          }}>
            Scroll Vertical
          </div>
          
          <div style={{
            fontSize: '14px',
            color: '#999'
          }}>
            {currentItem <= 20 ? 'Section 1-20' : 'Section 31-50'} • {currentItem}/50
          </div>
        </div>
      </>
    );
  }

  
  return (
    <>
      <style>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
      <div 
        ref={horizontalRef}
        style={{
          height: '100vh',
          width: '100vw',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-start',
          backgroundColor: '#f8f8f8',
          fontFamily: 'Arial, sans-serif',
          cursor: 'pointer',
          overflowX: 'auto',
          overflowY: 'hidden'
        }}
      >
        <div style={{ 
          display: 'flex',
          alignItems: 'center',
          minWidth: '300vw',
          height: '100%'
        }}>
          <div style={{
            width: '100vw',
            height: '100vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center'
          }}>
            <div style={{
              fontSize: '80px',
              fontWeight: 'bold',
              color: '#333',
              marginBottom: '20px'
            }}>
              {currentItem}
            </div>
            
            <div style={{
              fontSize: '18px',
              color: '#666',
              marginBottom: '10px'
            }}>
              Scroll Horizontal
            </div>
            
            <div style={{
              fontSize: '14px',
              color: '#999'
            }}>
              Section 21-30 • {currentItem}/50
            </div>
          </div>
        </div>
      </div>
    </>
  );
}