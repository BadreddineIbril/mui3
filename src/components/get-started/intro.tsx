const Intro = () => {
  return (
    <div mui-get-started="intro">
      <div className="intro-box">
        <article className="content">
          <p>
            <a href="https://m3.material.io" target="_blank">
              Material Design 3
            </a>{" "}
            hit different. It brought back expressive colors and a real sense of
            feel. But here's the thing, there was no real web version. A few
            half-baked attempts with{" "}
            <a
              href="https://developer.mozilla.org/en-US/docs/Web/API/Web_components"
              target="_blank">
              Web Components
            </a>{" "}
            existed, but nothing modern or easy to use. So I decided to build it
            myself.
          </p>
          <p>
            MUI 3 is a lightweight, open source, no third party dependencies,
            and no build system drama. Just grab your component, drop in your{" "}
            <small>index.tsx</small> and <small>style.css</small>, and you're
            off. Kind of like{" "}
            <a href="https://ui.shadcn.com/" target="_blank">
              shadcn/ui
            </a>
            , but pure.
          </p>
        </article>
      </div>
      <div className="intro-box" id="open-source">
        <div className="heading">
          <h2 className="title">Open source</h2>
        </div>
        <article className="content">
          <p>
            MUI3 lets you fully own your components. Yeah, it's based on
            Google's Material Design 3, but that doesn't mean you're locked into
            a specific look. You can customize, remix, and make it yours.
          </p>
          <p>
            This isn't some old school UI library where you fight the system to
            make changes. You control the code, want to strip something out? add
            your own vibe? It's all up to you.
          </p>
          <p>
            It's built to give the community freedom to build things
            differently, and try stuff that hasn't been done before.
          </p>
        </article>
      </div>
      <div className="intro-box" id="syntax">
        <div className="heading">
          <h2 className="title">Syntax</h2>
        </div>
        <article className="content">
          <p>
            I kept it close to what you'd see in{" "}
            <a href="https://ui.shadcn.com" target="_blank">
              shadcn/ui
            </a>
            . Familiar stuff makes life easier.
          </p>
          <p>
            I went with pure CSS over Tailwind, which let me try some fun stuff,
            like targeting components with <small>[mui-*]</small> attributes
            instead of class names. It keeps things clean, avoids conflicts, and
            just feels more readable to me.
          </p>
          <p>
            Not your style? You own the code, swap it for classes if that's your
            thing.
          </p>
        </article>
      </div>
      <div className="intro-box" id="beta">
        <div className="heading">
          <h2 className="title">Beta</h2>
        </div>
        <article className="content">
          <p>
            MUI3 is still in beta, so expect a few bugs here and there. If you
            spot anything, or have ideas for improvements, feel free to open an
            issue.
          </p>
          <p>
            Not every Material Design 3 component is here yet. I'm adding them
            bit by bit, depending on how hard they are, and how loud you ask for
            them.
          </p>
        </article>
      </div>
      <div className="intro-box" id="beta">
        <div className="heading">
          <h2 className="title">Resources</h2>
        </div>
        <article className="content">
          <p>If you're curious about the folks behind the original DS:</p>
          <ul className="resources">
            <li>
              <a href="https://m3.material.io/" target="_blank">
                Material Design 3 Showcase
              </a>
            </li>
            <li>
              <a
                href="https://www.figma.com/community/file/1035203688168086460/material-3-design-kit"
                target="_blank">
                Material 3 Design Kit
              </a>
            </li>
            <li>
              <a href="https://material-web.dev/" target="_blank">
                Material Web
              </a>
            </li>
          </ul>
        </article>
      </div>
    </div>
  );
};

export default Intro;
