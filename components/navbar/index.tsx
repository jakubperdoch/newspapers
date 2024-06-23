'use client';

import React from 'react';
import { InputText } from 'primereact/inputtext';
import { IconField } from 'primereact/iconfield';
import { InputIcon } from 'primereact/inputicon';
import { MenuItem } from '@/utils/types';
import { Sidebar } from 'primereact/sidebar';
import { Icon } from '@iconify/react';
import logo from '@/public/images/navbar-logo.svg';
import Image from 'next/image';
import { useState } from 'react';

export default function Navbar() {
 const [visible, setVisible] = useState<boolean>(false);
 const [query, setQuery] = useState<string>('');

 const items: MenuItem[] = [
  {
   label: 'Home',
   icon: 'pi pi-home',
  },
  {
   label: 'News',
   icon: 'pi pi-search',
   items: [
    {
     label: 'Core',
     icon: 'pi pi-bolt',
    },
    {
     label: 'Blocks',
     icon: 'pi pi-server',
    },
    {
     label: 'UI Kit',
     icon: 'pi pi-pencil',
    },
    {
     label: 'Templates',
     icon: 'pi pi-palette',
     items: [
      {
       label: 'Apollo',
       icon: 'pi pi-palette',
      },
      {
       label: 'Ultima',
       icon: 'pi pi-palette',
      },
     ],
    },
   ],
  },
  {
   label: 'Contact',
   icon: 'pi pi-envelope',
  },
 ];

 const sidebarHeader = (
  <>
   <IconField iconPosition="left">
    <InputIcon className="pi pi-search text-white/30"> </InputIcon>
    <InputText
     value={query}
     className="bg-zinc-900 border-0  focus:outline-none focus:ring-0 rounded-none text-white"
     onChange={(e) => setQuery(e.target.value)}
     placeholder="Search"
    />
   </IconField>
  </>
 );

 const sidebarCloseButton = (
  <Icon
   icon={'material-symbols-light:close-rounded'}
   height={30}
   className="text-white cursor-pointer hover:text-black"
  />
 );

 return (
  <div className="flex items-center justify-between bg-zinc-900 px-5 py-4">
   <Image src={logo} width={140} alt="navbar-logo" />

   <Icon
    icon={'hugeicons:menu-03'}
    height={28}
    className="text-white cursor-pointer"
    onClick={() => setVisible(true)}
   />

   <Sidebar
    visible={visible}
    className="w-[35rem] bg-zinc-900"
    position="right"
    header={sidebarHeader}
    closeIcon={sidebarCloseButton}
    onHide={() => setVisible(false)}
   >
    <h2>Sidebar</h2>
    <p></p>
   </Sidebar>
  </div>
 );
}
