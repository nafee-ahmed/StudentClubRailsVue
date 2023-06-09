## Initializing App

```bash
$ rails new . --api -d postgresql
$ npm init vue@latest
```

## Packages used on the backend

```bash
gem "bcrypt", "~> 3.1.7"
gem "jwt"
gem "rack-cors"
```

## Generating models

```bash
$ rails g model user email:string password:string name:string
      invoke  active_record
      create    db/migrate/20230603050045_create_users.rb
      create    app/models/user.rb
      invoke    test_unit
      create      test/models/user_test.rb
      create      test/fixtures/users.yml

$ rails g controller users
      create  app/controllers/users_controller.rb
      invoke  test_unit
      create    test/controllers/users_controller_test.rb
```

## Authentication

Resource: [Rails API + JWT Authentication. How to build simple Rails API… | by Riski Midi Wardana | Binar Academy | Medium](https://medium.com/binar-academy/rails-api-jwt-authentication-a04503ea3248)

## Many-to-many relation between user and clubs

```bash
$ rails g model club title:string about:string fee:float pastActiveMembers:float contactName:string contact:string                
      invoke  active_record
      create    db/migrate/20230605152050_create_clubs.rb
      create    app/models/club.rb
      invoke    test_unit
      create      test/models/club_test.rb
      create      test/fixtures/clubs.yml

$ rails g controller clubs
      create  app/controllers/clubs_controller.rb
      invoke  test_unit
      create    test/controllers/clubs_controller_test.rb

$ rails g model user_club user:references club:references
      invoke  active_record
      create    db/migrate/20230605152153_create_user_clubs.rb
      create    app/models/user_club.rb
      invoke    test_unit
      create      test/models/user_club_test.rb
      create      test/fixtures/user_clubs.yml
```

Then update the related models
