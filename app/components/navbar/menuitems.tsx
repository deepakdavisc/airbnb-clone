"use client";

interface MenuItemsProps {
  onClick: () => void;
  label: string;
}

const MenuItems: React.FC<MenuItemsProps> = ({ onClick, label }) => {
  return (
    <div
      onClick={onClick}
      className="font-semibold hover:bg-neutral-100 px-4 py-3 transition"
    >
      {label}
    </div>
  );
};

export default MenuItems;
