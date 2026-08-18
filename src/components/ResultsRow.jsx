import { ResultUnit } from "./ResultUnit"

export function ResultsRow({ imgArray }) {
  return (
    <div className="search-results-row">
      {imgArray?.length > 0 &&
        imgArray.map((result) => {
          return(
            <ResultUnit
            result={result}
            key={result.id} />
          )  
        })
      }
    </div>
  )
}
