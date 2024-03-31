import './spinner.css';

type SpinnerProps = {
  className?: string;
  main?: boolean;
}

export function Spinner({className, main}: SpinnerProps) {
  if (main) {
    return (
      <main className={'page__main spinner-container'}>
        <h1 className="visually-hidden">data is loading</h1>
        <div className="lds-ring" aria-hidden>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </main>
    );
  }

  return (
    <div className={`${className} spinner-container`}>
      <h1 className="visually-hidden">data is loading</h1>
      <div className="lds-ring" aria-hidden>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}
