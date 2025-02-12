document.getElementById('generateTable').addEventListener('click', function () {
    const rows = parseInt(document.getElementById('rows').value);
    const columns = parseInt(document.getElementById('columns').value);

    if (!rows || !columns || rows <= 0 || columns <= 0) {
      alert('Please enter valid numeric values for rows and columns.');
      return;
    }

    const tableContainer = document.getElementById('tableContainer');
    tableContainer.innerHTML = '';

    const table = document.createElement('table');

    for (let i = 0; i < rows; i++) {
      const tr = document.createElement('tr');
      for (let j = 0; j < columns; j++) {
        const td = document.createElement('td');
        td.textContent = 'a';
        tr.appendChild(td);
      }
      table.appendChild(tr);
    }

    tableContainer.appendChild(table);
  });