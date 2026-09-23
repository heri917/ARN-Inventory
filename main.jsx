import React,{useEffect,useState} from 'react'
import {createRoot} from 'react-dom/client'
import {Package,History,BarChart3,Menu,RefreshCw,Tags,Boxes,Download,Settings,Info,KeyRound,LogOut,X,Search,Filter,Plus} from 'lucide-react'
import './app.css'

const nav=[['stock','Stok',Package],['history','History',History],['summary','Ringkasan',BarChart3]]

function Splash(){
 return <div className="splash"><div className="splash-center">
   <img className="splash-logo" src="/arn-inventory-icon.png"/>
   <div className="loader"><i/></div>
   <div className="by">By</div>
   <img className="dev" src="/arn-solutions-reference.png"/>
 </div></div>
}

function App(){
 const [ready,setReady]=useState(false),[page,setPage]=useState('stock'),[menu,setMenu]=useState(false),[q,setQ]=useState('')
 useEffect(()=>{const t=setTimeout(()=>setReady(true),7000);return()=>clearTimeout(t)},[])
 if(!ready)return <Splash/>
 const title=nav.find(x=>x[0]===page)[1]
 return <div className="app">
  <header><img src="/arn-inventory-header-reference.png" className="header-logo"/><button className="icon" onClick={()=>setMenu(true)}><Menu/></button></header>
  <main>
   <div className="title"><div><small>ARN Inventory</small><h1>{title}</h1></div>{page==='stock'&&<button className="add"><Plus/> Tambahkan</button>}</div>
   {page==='stock'&&<><div className="search"><Search/><input value={q} onChange={e=>setQ(e.target.value)} placeholder="Cari part, kode, model, kategori..."/><button><Filter/></button></div>
   <div className="stats">{['Semua','Normal','Menipis','Kosong'].map(x=><div key={x}><b>0</b><span>{x}</span></div>)}</div>
   <div className="empty"><Package/><h2>Belum ada Part</h2><p>Tambahkan Part untuk mulai mengelola stok.</p><button className="add"><Plus/> Tambahkan Part</button></div></>}
   {page==='history'&&<div className="empty"><History/><h2>Belum ada History</h2><p>Transaksi Stock In dan Stock Out akan muncul di sini.</p></div>}
   {page==='summary'&&<div className="stats big">{['Jenis Part','Total Stok','Menipis','Kosong'].map(x=><div key={x}><b>0</b><span>{x}</span></div>)}</div>}
  </main>
  <nav>{nav.map(([id,label,Icon])=><button key={id} className={page===id?'active':''} onClick={()=>setPage(id)}><Icon/><span>{label}</span></button>)}</nav>
  {menu&&<div className="overlay" onClick={()=>setMenu(false)}><aside onClick={e=>e.stopPropagation()}>
    <div className="menu-head"><div><small>ARN Inventory</small><h2>Menu</h2></div><button className="icon" onClick={()=>setMenu(false)}><X/></button></div>
    {[[RefreshCw,'Refresh Data'],[Tags,'Kelola Kategori'],[Boxes,'Kelola Part'],[Download,'Backup / Ekspor'],[Settings,'Pengaturan'],[Info,'Tentang Aplikasi'],[KeyRound,'Lisensi']].map(([I,t])=><button className="menu-item" key={t}><I/><span>{t}</span></button>)}
    <div className="grow"/><button className="menu-item danger"><LogOut/><span>Keluar Akun</span></button>
  </aside></div>}
 </div>
}
createRoot(document.getElementById('root')).render(<App/>)
