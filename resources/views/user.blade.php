<table>
    <tr>
        <th>Nama</th>
        <th>No Anggota</th>
        <th>DPW</th>
        <th>DPC</th>
        <th>Pendidikan</th>
        <th>Status Kepegawaian</th>
        <th>Tempat Bekerja </th>
        <th>alamat Bekerja </th>
    </tr>
    @foreach ($data as $user)
        <tr>
            <td>{{ $user->name }}</td>
            <td>{{ $user->no_anggota }}</td>
            <td>{{ $user->province->name }}</td>
            <td>{{ $user->city->name }}</td>
            <td>{{ $user->pendidikan }}</td>
            <td>{{ $user->kepegawaian }}</td>
            <td>{{ $user->bekerja }}</td>
            <td>{{ $user->alamat_tempat_bekerja }}</td>
        </tr>
    @endforeach
</table>
