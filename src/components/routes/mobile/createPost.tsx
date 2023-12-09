import { ArrowLeft, Check } from "lucide-react";

import Headbar from '@/components/mobile/headbar'
import Navbar from "@/components/mobile/navbar";


function MobileCreatePost() {
  return (
    <div className="h-screen bg-slate-50 dark:bg-stone-900 lg:hidden">
      <Headbar leftIcon={ArrowLeft} rightIcon={Check} title="Create Post" />

      <Navbar selected="home" />
    </div>
  )
}

export default MobileCreatePost