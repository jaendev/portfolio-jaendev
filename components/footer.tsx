"use client";

export function Footer() {
  return (
    <footer className="container grid grid-cols-2 mx-auto px-4 md:px-6 pt-20 md:pt-20 pb-16 md:pb-12">
      <span>&copy; {new Date().getFullYear()} Brian Jaén</span>
      <span className="text-right">
        <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=infobrian03@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Contact
        </a>
      </span>
    </footer>
  )
}
