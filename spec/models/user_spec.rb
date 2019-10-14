require 'rails_helper'
describe User do
  describe '#create' do 
    it "ニックネーム, メアド, パスワード, 確認があれば通る" do
      user = build(:user)
      user.valid?
      expect(user).to be_valid
    end
    it "ニックネーム無しでは通らない" do
      user = build(:user, nickname: "")
      user.valid?
      expect(user.errors[:nickname]).to include("can't be blank")
    end
    it "メアド無しでは通らない" do
      user = build(:user, email: "")
      user.valid?
      expect(user.errors[:email]).to include("can't be blank")
    end
    it "パスワード無しでは通らない" do
      user = build(:user, password: "")
      user.valid?
      expect(user.errors[:password]).to include("can't be blank")
    end
    it "確認無しでは通らない" do
      user = build(:user, password_confirmation: "")
      user.valid?
      expect(user.errors[:password_confirmation]).to include("doesn't match Password")
    end
    it "ニックネーム9文字以上では通らない" do
      user = build(:user, nickname: "123456789")
      user.valid?
      expect(user.errors[:nickname][0]).to include("is too long")
    end
    it "ニックネーム8文字なら通る" do
      user = build(:user, nickname: "12345678")
      user.valid?
      expect(user).to be_valid
    end
    it "パスワード5文字以下では通らない" do
      user = build(:user, password: "12345", password_confirmation: "12345")
      user.valid?
      expect(user.errors[:password][0]).to include("is too short")
    end
    it "パスワード6文字以上なら通る" do
      user = build(:user, password: "123456", password_confirmation: "123456")
      user.valid?
      expect(user).to be_valid
    end
  end
end