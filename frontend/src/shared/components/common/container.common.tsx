export const Container = ({ children, className = 'my-12' }: { children: React.ReactNode; className?: string }) => {
	return <section className={`max-w-7xl mx-auto px-6 ${className}`}>{children}</section>;
};
