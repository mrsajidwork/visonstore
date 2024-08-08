const Loader = () => {
  return (
    <div className="flex h-screen items-center justify-center bg-blue dark:bg-black">
      <div className="h-16 w-16 animate-spin rounded-full border-4 border-solid border-primary border-t-transparent"></div>
    </div>
  );
};

export default Loader;


type AutoWidthLoaderProps = {
  height: number;
  width: number;
};

export function AutoWidthLoader({ height, width }: AutoWidthLoaderProps) {
  return (
    <div className="flex items-center justify-center">
      <div className={`h-${height} w-${width} animate-spin rounded-full border-4 border-solid border-primary border-t-transparent`}></div>
    </div>
  );
}