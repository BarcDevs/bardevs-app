const WindowHeader = ({}) =>
    (
        <div className="flex items-center justify-between border-b bg-[#f8faf9] px-3 py-2">
            <div className="flex items-center gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f56]"/>
                <span className="h-2.5 w-2.5 rounded-full bg-[#ffbd2e]"/>
                <span className="h-2.5 w-2.5 rounded-full bg-[#27c93f]"/>
            </div>
            <div className="text-xs text-muted-foreground">
                pages/index.tsx
            </div>
        </div>
    )

export default WindowHeader
