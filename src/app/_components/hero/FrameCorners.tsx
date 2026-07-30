export function FrameCorners() {
    return (
        <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-6 left-6 sm:top-10 sm:left-10 w-6 h-6 sm:w-8 sm:h-8 border-l border-t border-[color-mix(in_srgb,var(--foreground)_25%,transparent)]" />
            <div className="absolute bottom-6 right-6 sm:bottom-10 sm:right-10 w-6 h-6 sm:w-8 sm:h-8 border-r border-b border-[color-mix(in_srgb,var(--foreground)_25%,transparent)]" />
        </div>
    );
}
