import { render, screen } from '@testing-library/react';
import { Table, TableHead, TableRow, TableCell } from './Table';

describe('Table', () => {
  it('renders table with children', () => {
    render(
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Header</TableCell>
          </TableRow>
        </TableHead>
        <tbody>
          <TableRow>
            <TableCell>Cell</TableCell>
          </TableRow>
        </tbody>
      </Table>,
    );
    expect(screen.getByText('Header')).toBeInTheDocument();
    expect(screen.getByText('Cell')).toBeInTheDocument();
  });
});
