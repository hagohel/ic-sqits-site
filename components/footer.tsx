export function Footer() {
  return (
    <footer className="py-8 border-t border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} IC-SQITS. International Conference on Secure Quantum Intelligence & Trusted Systems.</p>
        </div>
      </div>
    </footer>
  )
}
