export function BackgroundGrid() {
  const verticalLines = new Array(30).fill(null);
  const horizontallLines = new Array(400).fill(null);

  return (
    <div className="background-grid">
      <div className="background-grid__vertical">
        {verticalLines.map((_, index) => (
          <div key={`verticalLine-${index}`} className="background-grid__vertical--line"></div>
        ))}
      </div>
      <div className="background-grid__horizontal">
        {horizontallLines.map((_, index) => (
          <div key={`horizontalLine-${index}`} className="background-grid__horizontal--line"></div>
        ))}
      </div>
    </div>
  )
}