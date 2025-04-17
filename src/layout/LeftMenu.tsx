export default function LeftMenu() {
  return (
    <div className="max-w-1/4 min-w-1/4 pt-9">
      <ul className="menu">
        <li>
          <details>
            <summary>Principles</summary>
            <ul>
              <li>
                <a className="link" href="/principles/domaindriven">
                  Domain driven design
                </a>
              </li>
            </ul>
          </details>
        </li>
        <li>
          <details>
            <summary>Security</summary>
          </details>
        </li>
        <li>
          <details>
            <summary>Performance</summary>
          </details>
        </li>
        <li>
          <details>
            <summary>Styles</summary>
          </details>
        </li>
        <li>
          <details>
            <summary>Integration</summary>
          </details>
        </li>
      </ul>
    </div>
  );
}
