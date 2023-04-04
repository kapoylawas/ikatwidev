
<table>
    <tr>
      <th>Nama</th>
      <th>Grand Total</th>
      <th>Status</th>
      <th>Tanggal Transaction</th>
    </tr>
    @foreach ($data as $ts )
    <tr>
        <td>{{ $ts->user->name }}</td>
        <td>{{ $ts->grand_total }}</td>
        <td>{{ $ts->status }}</td>
        <td>{{ $ts->created_at }}</td>
    </tr>
    @endforeach
</table>

