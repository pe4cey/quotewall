require 'rubygems'
require 'sinatra'
require 'haml'

set :public_folder, 'public'

get '*' do
  haml :index
end