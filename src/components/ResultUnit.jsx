import downloadTooltip from '../assets/download-tooltip.png'
import openFull from '../assets/fullsize-tooltip1.png'


export function ResultUnit({ result }) {
  async function downloadImage(result) {
    const responce = await fetch(result.urls.full);
    const blob = await responce.blob();

    const blobUrl = URL.createObjectURL(blob);

    const link = document.createElement('a');
    link.href = blobUrl;
    link.download = result.description || result.alt_description || 'image';

    document.body.appendChild(link);
    link.click();
    link.remove();

    setTimeout(() => {
      URL.revokeObjectURL(blobUrl);
    }, 100)
  }
  return (
    <div className="img-container">
      <img
        className='img'
        src={result.urls.small}
        alt={result.alt_description || 'image'} />

      <div className="img-tooltip">
        <div className="tooltip-container">
          <button
            className="tool-tip-button-style "
            onClick={() => {
              downloadImage(result)
            }}>
            <img
              className='tooltip-image'
              src={downloadTooltip}
              alt=''
            />
          </button>

          <button className="tool-tip-button-style"
            onClick={() => {
              window.open(result.urls.full, "_blank", "noopener,noreferrer");
            }}>
            <img
              className='tooltip-image'
              src={openFull}
              alt=''
            />
          </button>
        </div>
      </div>
    </div>
  )
}

