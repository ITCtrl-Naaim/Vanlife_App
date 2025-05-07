import "./Footer.scss";

export default function Footer() {
  const date = new Date().getFullYear();
  return (
    <footer>
      <p>
        <span className="copyrightsIcon">&copy;</span> {date} #VANLIFE
      </p>
    </footer>
  );
}
