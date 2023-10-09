import os
import sys
import asyncio
import string
import random


async def main(domain):
    letters = string.digits
    randomNum = ''.join(random.choice(letters) for i in range(5))
    os.system('rm -rf .next out')

    print("1.master\n2.github pages\n3.both")
    choice = int(input("choose you action: "))
    if choice == 1:
        input1 = input("commit for master: ")
        if len(input1) == 0:
            return print("\nmaster commit couldn't blank !")
        push = os.system('git add .;git commit -m \"#' +
                         randomNum+' '+input1+'\";git push origin master')
        return push
    elif choice == 2:
        input2 = input("commit for github pages(optional): ")
        if len(input2) == 0:
            input2 = "Deployed 🚀"
            build = os.system('yarn deploy')
            with open("out/CNAME", "w") as f:
                f.write(domain)
                await asyncio.sleep(0.5)
            os.system(
                "mkdir out/.github;mkdir out/.github/workflows;cp static.txt out/.github/workflows/static.yml")
            push2 = os.system('git add -f out;git commit -n -m \"#'+randomNum +
                              ' '+input2+'\";git push -d web gh-pages;git subtree push --prefix out web gh-pages')
            return build, push2
        build = os.system('yarn deploy')
        with open("out/CNAME", "w") as f:
            f.write(domain)
            await asyncio.sleep(0.5)
        os.system(
            "mkdir out/.github;mkdir out/.github/workflows;cp static.txt out/.github/workflows/static.yml")
        push2 = os.system('git add -f out; git commit -n -m \"#'+randomNum +
                          ' '+input2+'\";git push -d web gh-pages; git subtree push --prefix out web gh-pages')
        return build, push2
    elif choice == 3:
        input1 = input("commit for master: ")
        input2 = input("commit for github pages(optional): ")
        if len(input1) == 0:
            return print("master commit couldn't blank !")
        if len(input2) == 0:
            input2 = "Deployed 🚀"
            push3 = os.system('git add .;git commit -m \"#' +
                              randomNum+' '+input1+'\";git push origin master')
            build = os.system('yarn deploy')
            with open("out/CNAME", "w") as f:
                f.write(domain)
                await asyncio.sleep(0.5)
            os.system(
                "mkdir out/.github;mkdir out/.github/workflows;cp static.txt out/.github/workflows/static.yml")
            push4 = os.system('git add -f out;git commit -n -m \"#'+randomNum +
                              ' '+input2+'\";git push -d web gh-pages;git subtree push --prefix out web gh-pages')
            return push3, build, push4
        push3 = os.system('git add .;git commit -m \"#' +
                          randomNum+' '+input1+'\";git push -d web gh-pages;git push origin master')
        build = os.system('yarn master')
        with open("out/CNAME", "w") as f:
            f.write(domain)
            await asyncio.sleep(0.5)
        os.system(
            "mkdir out/.github;mkdir out/.github/workflows;cp static.txt out/.github/workflows/static.yml")
        push4 = os.system('git add -f out;git commit -n -m \"#'+randomNum +
                          ' '+input2+'\";git push -d web gh-pages; git subtree push --prefix out web gh-pages')
        return push3, build, push4
    else:
        print("you not choose anything so i'll exit")
        sys.exit()

if __name__ == '__main__':
    os.system('clear')
    print("REMEMBER\n you are not required to fill commits for github pages")
    asyncio.run(main("infoanime.site"))
