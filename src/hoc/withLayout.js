export default props  => {
    return () => (
      <div>
        <nav>
          <ul>....</ul>
        </nav>
        <main>
        {props.content}
        </main>
      </div>
    )
  }