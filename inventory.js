import { supabase } from './supabase'

export async function getCurrentStock() {
  if (!supabase) throw new Error('Supabase belum dikonfigurasi')
  return supabase.from('arn_current_stock').select('*').order('name')
}
export async function getHistory() {
  if (!supabase) throw new Error('Supabase belum dikonfigurasi')
  return supabase.from('arn_stock_transactions').select('*').order('transaction_date', {ascending:false})
}
export async function createStockTransaction(payload) {
  if (!supabase) throw new Error('Supabase belum dikonfigurasi')
  return supabase.from('arn_stock_transactions').insert(payload).select().single()
}
