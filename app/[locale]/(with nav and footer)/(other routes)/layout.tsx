import { FloatingBarWrapper } from '@/components/global/FloatingBarWrapper'
import { PropsWithChildren } from 'react'

const SectionLayout = ({children}: PropsWithChildren) => {
  return (
    <main className='pt-20 lg:pt-20 relative min-h-screen w-full '>
        {children}
        <FloatingBarWrapper isOnHomePage={false} />
    </main>
  )}


export default SectionLayout
