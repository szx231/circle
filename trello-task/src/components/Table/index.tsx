import styles from './Table.module.scss';
import { Header } from './Header';
import { TableWrapper } from './TableWrapper';
import { Thead } from './Thead';

export const Table = ({ array }) => {
  return (
    <>
      <Header />
      <TableWrapper>
        <Thead array={array} />
      </TableWrapper>
    </>
  );
};
