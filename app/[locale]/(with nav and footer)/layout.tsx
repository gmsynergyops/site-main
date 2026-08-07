import { SmoothScrollProvider } from '@/components/global/providers/SmoothScrollProvider'
import { NavAndFooterWrapper } from '@/components/wrapper/NavAndFooterWrapper'
import { PropsWithChildren } from 'react'

const WithNavLayout = ({ children }: PropsWithChildren) => {
  return (
    <SmoothScrollProvider>
      <NavAndFooterWrapper>
        <main className='min-h-screen w-full bottom-0 sticky '>
          {children}
        </main>
      </NavAndFooterWrapper>
    </SmoothScrollProvider>
  )
}

export default WithNavLayout
