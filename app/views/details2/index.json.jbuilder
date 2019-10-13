json.array! @howmuches.each do|howmuch|
  json.id howmuch.id
  json.money howmuch.money
  json.member_id howmuch.member_id
  json.category_id howmuch.category_id
  json.detail_id howmuch.detail_id
end