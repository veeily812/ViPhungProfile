export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-muted py-8 text-center text-muted-foreground">
      <div className="container mx-auto px-4 md:px-6">
        <p>&copy; {currentYear} VivianPortfolio. All rights reserved.</p>
        <p className="text-sm mt-1">Designed with passion.</p>
      </div>
    </footer>
  );
}
