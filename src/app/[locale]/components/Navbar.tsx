'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Phone, Globe, ChevronDown } from 'lucide-react';
import { ThemeToggle } from './theme-toggle';
import Image from 'next/image';
import { Link, usePathname, useRouter } from '@/i18n/routing';
import { useLocale, useTranslations } from 'next-intl';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null); // للتحكم بالهوفر
  const t = useTranslations('Navbar');
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const toggleLocale = () => {
    const nextLocale = locale === 'en' ? 'ar' : 'en';
    router.push(pathname, { locale: nextLocale });
  };

  const navItems = [
    { href: '/', label: t('home') },
    { href: '/about', label: t('about') },
    {
      dropdown: 'services',
      label: t('services'),
      items: [
        { href: '/services/fire-Protection', label: t('fire') },
        {
          href: '/services/fire-Alarms-Systems',
          label: t('Fire-Alarms-Systems'),
        },
        { href: '/services/regular-maintenance', label: t('maintenance') },
      ],
    },

    { href: '/products', label: t('product') },
    { href: '/projects', label: t('projects') },
    { href: '/clients', label: t('client') },
    { href: '/gallery', label: t('gallery') },
    { href: '/contact', label: t('contact') },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="containerr mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Image src="/image/logo.png" alt="logo" width={80} height={80} />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-6 items-center">
            {navItems.map((item) =>
              item.dropdown ? (
                <DropdownMenu
                  key={item.dropdown}
                  open={openDropdown === item.dropdown}
                  onOpenChange={(open) =>
                    setOpenDropdown(open ? item.dropdown : null)
                  }
                >
                  <DropdownMenuTrigger
                    className="flex items-center text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                    onMouseEnter={() => setOpenDropdown(item.dropdown!)}
                    onMouseLeave={() => setOpenDropdown(null)}
                  >
                    {item.label} <ChevronDown className="ml-1 h-4 w-4" />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent
                    onMouseEnter={() => setOpenDropdown(item.dropdown!)}
                    onMouseLeave={() => setOpenDropdown(null)}
                  >
                    {item.items.map((sub) => (
                      <DropdownMenuItem key={sub.href} asChild>
                        <Link href={sub.href}>{sub.label}</Link>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <Link
                  key={item.href}
                  href={item.href!}
                  className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                >
                  {item.label}
                </Link>
              )
            )}
          </div>

          {/* Actions */}
          <div className="hidden md:flex items-center gap-4">
            <ThemeToggle />
            <Button
              className="hover:text-white"
              variant="ghost"
              size="sm"
              onClick={toggleLocale}
            >
              <Globe className="h-4 w-4 mr-2" />
              {t('switch')}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            className="hover:text-white md:hidden"
            size="sm"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden border-t bg-background">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) =>
                item.dropdown ? (
                  <div key={item.dropdown} className="px-3 py-2">
                    <p className="font-medium text-muted-foreground">
                      {item.label}
                    </p>
                    <div className="ml-3 mt-1 space-y-1">
                      {item.items.map((sub) => (
                        <Link
                          key={sub.href}
                          href={sub.href}
                          className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
                          onClick={() => setIsOpen(false)}
                        >
                          {sub.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    key={item.href}
                    href={item.href!}
                    className="block px-3 py-2 text-base font-medium text-muted-foreground hover:text-foreground transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                )
              )}

              <div className="flex flex-col gap-2 px-3 py-2">
                <ThemeToggle />
                <Button variant="outline" size="sm" onClick={toggleLocale}>
                  <Globe className="h-4 w-4 mr-2" />
                  {t('switch')}
                </Button>
                <Button asChild className="flex-1">
                  <Link
                    href="/contact"
                    className="flex items-center justify-center space-x-2"
                    onClick={() => setIsOpen(false)}
                  >
                    <Phone className="h-4 w-4" />
                    <span>{t('quote')}</span>
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
