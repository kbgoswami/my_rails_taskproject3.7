class UserMailer < ApplicationMailer
	default from: "from@example.com"

  def contact_form(email, name, message)
  @message = message
    mail(:from => email,
        :to => 'kbgoswami@comcast.net',
        :subject => "A new contact form message from #{name}")
  end

  def welcome(user)
  	@appname = "Bikesonsale"
  	mail( :to => user.email,
    :subject => "Welcome to #{@appname}!")
  end

  def order_payment(user, product)
    @user = user
    @product = product
    mail(:from => 'from@example.com',
      :to => @user.email,
      :subject => "Thank you for your purchase")
  end

end
