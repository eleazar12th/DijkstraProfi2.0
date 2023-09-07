import TableRow from "./TableRow";
import "../css/table.css";

export default function Table(props) {
    function deepCopy(arr) {
        let arrCopy = [];
        for (let i = 0; i < arr.length; ++i) {
            arrCopy.push([...arr[i]]);
        }
        return arrCopy;
    }

    function setCell(rowNumber, colNumber, newVal) {
        let updatedMatrix = deepCopy(props.matrix);
        updatedMatrix[rowNumber][colNumber] = newVal;

        if (props.graphType === "undirected" && rowNumber !== colNumber) {
            updatedMatrix[colNumber][rowNumber] = newVal;

            const reversedCellId = `cell_${colNumber}:${rowNumber}`;
            let reversedCell = document.getElementById(reversedCellId);
            reversedCell.value = newVal;
        }

        props.setMatrix(updatedMatrix);
    }

    function cleanCell(rowNumber, colNumber) {
        let updatedMatrix = deepCopy(props.matrix);
        updatedMatrix[rowNumber][colNumber] = "-";
        props.setMatrix(updatedMatrix);

        const cellId = `cell_${rowNumber}:${colNumber}`;
        let cell = document.getElementById(cellId);
        cell.value = "";
    }

    function setCellError(rowNumber, colNumber, msg) {
        let newErrorMatrix = deepCopy(props.errorMatrix);
        newErrorMatrix[rowNumber][colNumber] = msg;
        props.setCheckErrorMatrix(newErrorMatrix);
    }

    return (<div>
        <br />
        <table className="table table-sm table-bordered" border="1">
            <tbody>
            <tr>
                <th>
                    <span className="from-to-span">from\to</span>
                </th>
                {Array(props.nodesAmount)
                    .fill(true)
                    .map((item, index) => {
                        return (
                            <th key={index}>{index + 1}</th>
                        );
                    })
                }
            </tr>

            {
                props.matrix.map((row, rowNumber) => {
                    return (
                        <TableRow
                            key={`row${rowNumber}`}
                            row={row}
                            rowNumber={rowNumber}
                            setCell={setCell}
                            cleanCell={cleanCell}
                            setCellError={setCellError}
                        />
                    );
                })
            }
            </tbody>
        </table>
    </div>);
}