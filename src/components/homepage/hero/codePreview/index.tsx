import WindowHeader from '@/components/homepage/hero/codePreview/window-header'
import FloatingMetrics from '@/components/homepage/hero/codePreview/floating-metrics'
import { CODE } from '@/constants/hero/code'

const Index = ({}) =>
    (
        <div className="relative z-10">
            <div className="relative mx-auto w-full max-w-md overflow-hidden rounded-xl border bg-white shadow">
                <WindowHeader/>

                <div className="relative">
                    <pre
                        className="font-mono m-0 max-h-[360px] overflow-auto bg-white px-4 py-4 text-xs leading-relaxed">
                        {CODE}
                    </pre>
                </div>
            </div>

            <FloatingMetrics/>
        </div>
    )

export default Index
