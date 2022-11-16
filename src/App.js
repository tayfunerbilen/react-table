import Table from "./table";
import {useState} from "react";

function App() {

	const [users, setUsers] = useState(() => [
		{
			name: 'Tayfun',
			surname: 'Erbilen',
			email: 'te@gmail.com',
			age: 29
		},
		{
			name: 'Mehmet',
			surname: 'Seven',
			email: 'mseven@gmail.com',
			age: 29
		},
		{
			name: 'Gökhan',
			surname: 'Kandemir',
			email: 'gkandemir@gmail.com',
			age: 35
		},
		{
			name: 'Ahmet',
			surname: 'Tarık G.',
			email: 'atg@gmail.com',
			age: 24
		}
	])

	return (
		<div className="p-4">
			<Table
				searchable={true}
				head={[
					{name: 'Ad-Soyad', sortable: true},
					{name: 'E-posta'},
					{name: 'Yaş', sortable: true},
					{name: 'İşlemler', width: 200}
				]}
				body={users && users.map((user, key) => ([
					<div key={`${user.name} ${user.surname}`}>{user.name} {user.surname}</div>,
					user.email,
					<div searchableText={`Yaş ${user.age}`}>{user.age}</div>,
					[
						<button className="h-8 px-4 flex items-center justify-center rounded bg-blue-600 text-white">Düzenle</button>,
						<button onClick={() => {
							const tmpUsers = [...users]
							tmpUsers.splice(key, 1)
							setUsers(tmpUsers)
						}} className="h-8 px-4 flex items-center justify-center rounded bg-red-600 text-white">Sil</button>
					]
				]))}
			/>
		</div>
	);
}

export default App;
