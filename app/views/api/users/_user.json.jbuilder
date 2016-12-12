json.extract! user, :id, :email, :firstname, :lastname, :birthday, :gender, :current_town, :home_town, :relationship, :workplace, :school
json.profilepic asset_path(user.profilepic)
