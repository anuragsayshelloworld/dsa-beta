import { useNavigate } from "react-router-dom";
import { BookOpen, Target, DollarSign } from "lucide-react";

export default function Home() {
const navigate = useNavigate()

return (
<div className="min-vh-100 bg-white">
{/* Main Content */}
<main className="container py-5">
<div className="row justify-content-center">
<div className="col-lg-10">
{/* Hero */}
<div className="text-center mb-5">
<h1 className="display-3 fw-bold text-dark mb-4">Master DSA the Smart Way</h1>
<button className="btn btn-outline-primary btn-lg px-4 py-2" onClick={() => navigate("/stack")}>
🚀 Start Learning
</button>
</div>

{/* Honest About What We Offer */}
<div className="bg-light rounded p-4 mb-5">
<h2 className="h3 fw-bold text-dark mb-4 text-center">What You Get Here</h2>
<div className="row g-4">
<div className="col-md-4 text-center">
<Target size={48} className="text-primary mb-3" />
<h3 className="h5 fw-semibold text-dark mb-2">Pass-Focused Content</h3>
<p className="text-muted small">
We cover what you need to get passing marks. No deep dives - just the essentials that show up in
exams.
</p>
</div>
<div className="col-md-4 text-center">
<BookOpen size={48} className="text-success mb-3" />
<h3 className="h5 fw-semibold text-dark mb-2">Pokhara University Focused</h3>
<p className="text-muted small">
Content specifically designed around Pokhara University syllabus and exam patterns.
</p>
</div>
<div className="col-md-4 text-center">
<DollarSign size={48} className="text-info mb-3" />
<h3 className="h5 fw-semibold text-dark mb-2">Free for Students</h3>
<p className="text-muted small">
Made for students on a budget. All content is free because education shouldn't be expensive.
</p>
</div>
</div>
</div>

{/* Honest Disclaimer */}
<div className="alert alert-warning mb-5">
<h3 className="h5 fw-semibold text-warning-emphasis mb-2">Fair Warning</h3>
<p className="text-warning-emphasis small mb-0">
This platform is designed to help you pass your DSA course, not to make you a programming expert. We
focus on memorizable patterns and frequently asked questions. If you want deep understanding, you'll
need additional resources. But if you need to pass your exam - we've got you covered.
</p>
</div>

{/* Simple CTA */}
<div className="text-center">
<h2 className="h3 fw-bold text-dark mb-3">Ready to Start?</h2>
<p className="text-muted mb-4">
No signup required. Just start learning and track your progress as you go.
</p>
<button className="btn btn-primary btn-lg px-4" onClick={() => navigate("/stack")}>
Begin with Stacks
</button>
</div>
</div>
</div>
</main>

{/* Simple Footer */}
<footer className="border-top bg-light py-4 mt-5">
<div className="container text-center">
<p className="text-muted mb-0">Made for Pokhara University students. Free forever.</p>
</div>
</footer>
</div>
)
}
