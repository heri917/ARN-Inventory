# ARN Inventory - locked implementation notes

- Main navigation: Stok, History, Ringkasan.
- Hamburger top-right for supporting functions.
- Header respects iOS/Android safe area.
- Loading: minimum 7 seconds, small logo, 3D box rolling animation, "By" above developer logo.
- Developer logo appears only in loading and About.
- Quantity control: minus / number / plus; no manual quantity input.
- Transaction date defaults to current real-time date; calendar picker can override.
- Supplier/customer optional.
- Price optional.
- No notes field.
- New Parts and Categories may be created outside master data.
- No barcode in initial version.
- No low-stock push notifications.
- Delete dialog: "Hapus Data?", concise warning, Batal + Hapus(7), countdown inside delete button.
- Immediate UI update after History save; Supabase synchronization runs separately.
- Backup/export CSV.
