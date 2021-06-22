using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using TMSWebAPI.ViewModels.Account;

namespace TMSWebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AccountController : ControllerBase
    {
        private readonly UserManager<IdentityUser> _userManager;
        private readonly SignInManager<IdentityUser> _signInManager;
        private readonly RoleManager<IdentityRole> _rolesManager;

        public AccountController(UserManager<IdentityUser> userManager,
                                 SignInManager<IdentityUser> signInManager,
                                 RoleManager<IdentityRole> rolesManager)
        {
            _userManager = userManager;
            _signInManager = signInManager;
            _rolesManager = rolesManager;
        }

        [HttpPost("CreateAccount")]
        public async Task<bool> CreateAccount(SignInViewModel model)
        {
            var user = new IdentityUser
            {
                UserName = model.Email,
                Email = model.Email,
                PhoneNumber = model.PhoneNumber
            };
            var result = await _userManager.CreateAsync(user, model.Password);
            if (result.Succeeded)
            {
                var role = await _rolesManager.FindByIdAsync("2");
                await _userManager.AddToRoleAsync(user, role.Name);
                return true;
            }
            else
            {
                return false;
            }
        }

        [HttpPost("SignIn")]
        public async Task<UserReturnType> SignIn(SignInViewModel model)
        {
            var modelReturn = new UserReturnType();
            var user = await _userManager.FindByEmailAsync(model.Email);
            if (user == null)
            {
                modelReturn.IsCorrect = false;
                modelReturn.Message = "Email doesn't exists";
                return modelReturn;
            }
            var result = await _signInManager.PasswordSignInAsync(model.Email, model.Password, true, lockoutOnFailure: true);
            if (result.Succeeded)
            {
                modelReturn.IsCorrect = true;
                modelReturn.Message = "Successfully logged in";
                var role = await _userManager.IsInRoleAsync(user, "User");
                modelReturn.roleId = role ? "2" : "1";
                return modelReturn;
            }
            else
            {
                modelReturn.IsCorrect = false;
                modelReturn.Message = "Password is not correct";
                return modelReturn;
            }
        }

        [HttpGet("SignOut")]
        public async Task<bool> SignOut()
        {
            await _signInManager.SignOutAsync();
            return true;
        }

        [HttpGet("GetUser")]
        public async Task<string> GetUser()
        {
            var user = await _userManager.FindByNameAsync(User.Identity.Name);

            return user.Email;
        }

        [HttpGet("GetAllUser")]
        public List<IdentityUser> GetAllUser()
        {
            var user = _userManager.Users.ToList();
            return user;
        }

        [HttpGet("Logout")]
        public async Task<bool> Logout()
        {
            await _signInManager.SignOutAsync();

            return true;
        }
    }
}
