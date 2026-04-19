export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">

          <p className="footer-text">
            © {year} Sejal Gohil. Built with ❤️ using React &amp; Vite.
          </p>

        </div>
      </div>
    </footer>
  );
}
