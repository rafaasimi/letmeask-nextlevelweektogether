import '../styles/toggledarktheme.scss'

function handleDarkTheme(){
    document.body.classList.toggle('dark')
}


export function ToggleDarkTheme() {
  return (
    <div className="toggle-button">
      <input type="checkbox" className="checkbox" id="chk" onChange={handleDarkTheme}/>
      <label className="label" htmlFor="chk">
        <i className="fas fa-moon"></i>
        <i className="fas fa-sun"></i>
        <div className="ball"></div>
      </label>
    </div>
  );
}
