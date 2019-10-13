json.array! @howmuches.each do|howmuch|
  json.id howmuch.id
  json.name howmuch.name
  json.money howmuch.money
  json.where howmuch.where
  json.when howmuch.when
end