export default function LeftMenu() {
  return (
    <div className="pt-9">
      <ul>
        <li className="pr-8">
          <a className="link" href="/principles">
            Principles
          </a>
        </li>
        <li>
          <a className="link" href="/security">
            Security
          </a>
        </li>
        <li>
          <a className="link" href="/styles">
            Styles
          </a>
        </li>
        <li className="pr-8">
          <a className="link" href="/deployment">
            Deployment
          </a>
        </li>
        <li className="pr-8">
          <a className="link" href="/integration">
            Integration
          </a>
        </li>
        <li className="pr-8">
          <a className="link" href="/performance">
            Performance
          </a>
        </li>
      </ul>
    </div>
  );
}
