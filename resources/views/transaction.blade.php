<table>
    <tr>
      <th>Nama</th>
      <th>NO ekta</th>
      <th>DPW</th>
      <th>DPC</th>
      <th>Nominal Bayar</th>
      <th>Tanggal Bayar</th>
      <th>Status Pembayaran</th>
    </tr>
    @foreach ($data as $ts)
    <tr>
        <td>{{ $ts->user?->name ?? 'N/A' }}</td>
        <td>{{ $ts->user?->no_anggota ?? 'N/A' }}</td>
        <td>{{ $ts->province?->name ?? 'N/A' }}</td>
        <td>{{ $ts->city?->name ?? 'N/A' }}</td>
        <td>{{ $ts->grand_total }}</td>
        <td>{{ $ts->created_at }}</td>
        <td>{{ $ts->status }}</td>
    </tr>
    @endforeach
</table>