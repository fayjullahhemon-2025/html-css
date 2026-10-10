
const navItems = [
  "হোম",
  "রাজনীতি",
  "বিশ্ব",
  "অর্থনীতি",
  "স্বাস্থ্য",
  "খেলা",
  "প্রযুক্তি",
  "দেশজুড়ে",
];

export default function Navbar() {
  return (
    <nav className="w-full bg-white px-4 py-3">
      <ul className="flex items-center gap-6 overflow-x-auto whitespace-nowrap">
        {navItems.map((item) => (
          <li key={item}>
            <a
              href="#"
              className="text-base font-medium text-gray-700 transition-colors hover:text-red-600"
            >
              {item}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
