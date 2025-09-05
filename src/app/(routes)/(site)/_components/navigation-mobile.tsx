'use client'

import Link from 'next/link'
import { PanelBottom } from 'lucide-react'

import { APP, ROUTES } from '@/config'
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerTrigger,
} from '@/components/ui/drawer'
import { Button } from '@/components/ui/button'

import { NAVIGATION } from '../_datas/navigation'

interface NavigationMobileProps {
  authenticated?: boolean
}

export function NavigationMobileComponent(props: NavigationMobileProps) {
  return (
    <Drawer>
      <DrawerTrigger className="flex md:hidden" asChild>
        <Button variant="ghost" size="icon" className="size-7 cursor-pointer">
          <PanelBottom />
          <span className="sr-only">Alternar Menu</span>
        </Button>
      </DrawerTrigger>

      <DrawerContent>
        <nav className="flex flex-col gap-2 p-4 pb-0 font-medium sm:pb-4">
          {NAVIGATION.map((item) => (
            <DrawerClose asChild key={item.href}>
              <Link
                href={item.href}
                className="underline-offset-4 hover:underline"
              >
                {item.label}
              </Link>
            </DrawerClose>
          ))}
        </nav>

        <DrawerFooter className="sm:hidden">
          {props.authenticated ? (
            <DrawerClose asChild>
              <Button size="sm" asChild>
                <Link href={ROUTES.app}>App</Link>
              </Button>
            </DrawerClose>
          ) : (
            <>
              <DrawerClose asChild>
                <Button size="sm" asChild>
                  <Link href={ROUTES.register}>Use a {APP.name} de graça</Link>
                </Button>
              </DrawerClose>

              <DrawerClose asChild>
                <Button size="sm" variant="outline" asChild>
                  <Link href={ROUTES.login}>Entrar</Link>
                </Button>
              </DrawerClose>
            </>
          )}
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}
