import TableCell from "./TableCell";

export default function TableRow(props) {
    return (
        <tr>
            <th>{props.rowNumber + 1}</th>
            {props.row.map((cell, colNumber) => {
                let newKey = `cell_${props.rowNumber}:${colNumber}`;
                return (
                    <TableCell
                        key={newKey}
                        rowNumber={props.rowNumber}
                        colNumber={colNumber}
                        setCell={props.setCell}
                        cleanCell={props.cleanCell}
                        setCellError={props.setCellError}
                    />
                );
            })}
        </tr>
    );
}