import './spinner.css';

export function Spinner({className}: {className: string}) {
  return (
    <div className={`${className} spinner-container`}>
      <div className="lds-ring">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}
