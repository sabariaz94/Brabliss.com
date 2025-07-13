// components/Footer.tsx
export default function Footer() {
  return (
    <footer className="text-center p-4 mt-10 border-t text-sm text-gray-500">
      &copy; {new Date().getFullYear()} E-Shop. All rights reserved.
    </footer>
  );
}