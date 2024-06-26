const Path = (props: any) => (
  <path
    fill="transparent"
    strokeWidth="3"
    stroke="#09090b"
    strokeLinecap="round"
    className=""
    {...props}
  />
);

export const MenuToggle = ({ toggle, className }: { toggle: any, className: string }) => (
  <button onClick={toggle} className={className} >
    <svg width="20" height="16" viewBox="0 0 23 18">
      <Path
        d="M 2 2.5 L 20 2.5"
        className="top bg-zinc-950"
        variants={{
          closed: { d: "M 2 2.5 L 20 2.5" },
          open: { d: "M 3 16.5 L 17 2.5" }
        }}
      />
      <Path d="M 2 9.423 L 20 9.423" opacity="1" className="middle" />
      <Path
        d="M 2 16.346 L 20 16.346"
        className="bottom"
        variants={{
          closed: { d: "M 2 16.346 L 20 16.346" },
          open: { d: "M 3 2.5 L 17 16.346" }
        }}
      />
    </svg>
  </button>
);
