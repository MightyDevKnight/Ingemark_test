import styled from "styled-components";

export const TableContainer = styled.div`

  border-top: 2px solid #fff;
  max-height: 500px;
  overflow-y: scroll;
  margin-bottom: 50px;
`

export const Table = styled.table`
  width: 500px;
  border-collapse: collapse;
  text-align: center;
  font-size: var(--font-size-small);
  thead {
    position: sticky;
    top: 0;
    background: #000;
  }
  th,
  td {
    padding: 8px;
    text-align: left;
    border: 1px solid #ddd;
  }
  th {
    background-color: #f2f2f2;
  }
`;


export const TbodyWrapper = styled.div`
  height: 400px;
  overflow-y: scroll;
`